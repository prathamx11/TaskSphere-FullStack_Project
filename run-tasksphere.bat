@echo off
start "TaskSphere Server" cmd /k "cd /d C:\Mern project\server && npm.cmd start"
start "TaskSphere Client" cmd /k "cd /d C:\Mern project\client && npm.cmd start"
