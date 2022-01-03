@echo off
REM developer.bat located on the same path as DEV_HOME
set BASE_DIR=%~dp0
set DEV_HOME=%BASE_DIR%
set PATH=%DEV_HOME%.\bin;%PATH%
set GIT_HOME=C:\Program Files\Git\

GOTO START

:START
cd /d %DEV_HOME%
echo %GIT_HOME%
set "PATH=%GIT_HOME%;%PATH%"
start git-bash.exe -c "./setenv %1;bash %2 %3 %4 %5 %6 %7 %8 %9"
exit 0

