#!/bin/bash
# npm cache clean --force
# npm ci
chmod -R 755 node_modules
chmod +x .platform/hooks/postdeploy/01_start_server.sh
