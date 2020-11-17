#!/bin/bash
# starts python3 http dev server

project_dir="$(dirname $(dirname $(realpath $0)))"

cd $project_dir
python3 -m http.server