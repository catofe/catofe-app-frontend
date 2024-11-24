#!/bin/sh

FRONTEND=$HOME/Documents/Git/catofe-app-frontend
BACKEND=$HOME/Documents/Git/catofe-app-backend
DEV="npm run dev"
EDITOR="nvim"

tmux new-window -c $BACKEND\; send-keys $EDITOR Enter
tmux new-window
tmux new-window -c $FRONTEND\; send-keys 'npm run dev' Enter
tmux new-window -c $BACKEND\; send-keys 'npm run dev' Enter
