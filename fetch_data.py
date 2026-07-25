"""
fetch_data.py
--------------
Standalone helper script — NOT part of the live site.

Pulls "trending this week" movies and TV shows from the free TMDB API
and saves them as trending_movie.json / trending_tv.json in this same
folder. script.js automatically reads these files as a fallback when
no live API key is entered in the browser, so you can run this script
every so often (daily / weekly, e.g. via cron or Task Scheduler) to
keep the site's trending panel fresh without needing a browser-side key.

Setup:
  1. Get a free TMDB API key (no credit card required):
     https://www.themoviedb.org/settings/api
  2. Set it as an environment variable, OR pass it as an argument:
       export TMDB_API_KEY="your_key_here"      (Mac/Linux)
       setx TMDB_API_KEY "your_key_here"         (Windows)
     or:
       python fetch_data.py --key your_key_here
  3. Run:
       python fetch_data.py
"""

import argparse
import json
import os
import sys
import urllib.request
import urllib.error

TMDB_BASE = "https://api.themoviedb.org/3"


def fetch_trending(media_type: str, api_key: str) -> dict:
    """Fetch trending movies or TV shows for the current week from TMDB."""
    url = f"{TMDB_BASE}/trending/{media_type}/week?api_key={api_key}"
    req = urllib.request.Request(url, headers={"Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        raise SystemExit(
            f"TMDB request failed for '{media_type}' ({e.code}): {e.reason}. "
            "Double-check your API key."
        )
    except urllib.error.URLError as e:
        raise SystemExit(f"Network error reaching TMDB: {e.reason}")


def save_json(data: dict, filename: str) -> None:
    out_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), filename)
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"Saved {filename} ({len(data.get('results', []))} titles)")


def main():
    parser = argparse.ArgumentParser(description="Cache trending movies/TV from TMDB for the local site.")
    parser.add_argument("--key", help="TMDB API key (overrides TMDB_API_KEY env var)")
    args = parser.parse_args()

    api_key = args.key or os.environ.get("TMDB_API_KEY")
    if not api_key:
        sys.exit(
            "No API key found.\n"
            "Set the TMDB_API_KEY environment variable, or run:\n"
            "  python fetch_data.py --key YOUR_KEY_HERE\n"
            "Get a free key at https://www.themoviedb.org/settings/api"
        )

    for media_type in ("movie", "tv"):
        print(f"Fetching trending {media_type}s…")
        data = fetch_trending(media_type, api_key)
        save_json(data, f"trending_{media_type}.json")

    print("Done. Refresh index.html (served via a local web server) to see updated data.")


if __name__ == "__main__":
    main()
