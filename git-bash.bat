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


@REM :INSTALL
@REM if not exist "%DEV_HOME%\git\git-bash.exe" (
@REM     curl -L -o %DEV_HOME%\tmp\PortableGit.7z.exe https://github.com/git-for-windows/git/releases/download/v2.30.1.windows.1/PortableGit-2.30.1-64-bit.7z.exe
@REM     7za x -r -o%DEV_HOME%\git %DEV_HOME%\tmp\PortableGit.7z.exe
@REM     %BASE_DIR%\git\git-bash.exe --no-needs-console --hide --no-cd --command=%DEV_HOME%\git\post-install.bat
@REM )