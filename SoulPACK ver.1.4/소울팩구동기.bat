@echo off
set a=0
title Soul PACK ver.1.4
color 
:clear
cls
echo.
echo         배포자: 소울씨 [xoeh15] 기반팩 웃자팩 ver 1.1.0 소이씨팩
echo         기반 허락맞고 가능합니다!!
echo.        [허락없이하다가걸리면 두고보세요 ]
echo         무단배포 절대 허용안합니다
echo  	Soul PACK ver.1.4
echo.
echo	        S : 시작
echo	        O : 종료      
echo	        U : 다시시작   
echo	        L : 정리
echo	        z : 백업
echo.
echo.
:command
set /p s="Insert Code: "
if "%s%"=="S" goto :start
if "%s%"=="O" goto :shutdown
if "%s%"=="U" goto :restart
if "%s%"=="L" goto :clear
if "%s%"=="z" goto :backup
if "%s%"=="U" goto :update
if "%s%"=="switch" goto :switch
if "%s%"=="restore" goto :restore
echo Code is does not exist
echo.
goto :command

:update
start update.bat
echo.
echo Database updated!
echo.
goto :command

:switch
color 4c
title OdinMS: switching
ping localhost -w 100000 >nul
start launcher2.bat
taskkill /im cmd.exe

:backup
if not exist backup mkdir backup
if not exist backup\dist mkdir backup\dist
copy "launch_*.bat" "backup\launch_*.bat" >nul
copy "*.properties" "backup\*.properties" >nul
if exist "*.jar" copy "*.jar" "backup\*.jar" >nul
copy "dist\*.jar" "backup\dist\*.jar" >nul
echo.
echo Back up Success!
echo.
goto :command

:restore
echo.
echo Are you sure you want to restore? This cannot be undone!
set /p c=[y/n]: 
if "%c%"=="y" (
if exist "backup\launch_world.bat" (
copy "backup\launch_*.bat" "launch_*.bat" >nul
copy "backup\*.properties" "*.properties" >nul
if exist "backup\*.jar" copy "backup\*.jar" "*.jar" >nul
copy "backup\dist\*.jar" "dist\*.jar" >nul
echo Restored!
) else (
echo No files to restore!
)
) else (
echo Aborted
)
echo.
goto :command

:start
if "%a%"=="1" (
echo OdinMS is already active!
echo.
goto :command
)
color 4c
title OdinMS: activating 0/3
start /b world.bat
title Starting
ping localhost -w 10000 >nul
start /b login.bat
title Starting
ping localhost -w 10000 >nul
start /b channel.bat
title Starting
ping localhost -w 10000 >nul
color 1b
title Start Server
set a=1
echo.
goto :command

:shutdown
color 4c
title Shutting Down
ping localhost -w 100000 >nul
taskkill /im cmd.exe

:restart
color 4c
ping localhost -w 100000 >nul
start /b world.bat
title Starting
ping localhost -w 10000 >nul
start /b login.bat
title Starting
ping localhost -w 10000 >nul
start /b channel.bat
title Starting
ping localhost -w 10000 >nul
title Re Start Server
color 1b
