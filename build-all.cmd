echo off

@FOR %%N IN (mscorelib utils gui engine angular angular-material-core) DO (
  	echo [barrelsby %%N...]	
    call node_modules/.bin/barrelsby -c projects/%%N/barrelsby.json
    attrib -r dist/%%N/README.md

)
 call build.cmd mscorelib
 if %errorlevel% NEQ 0 goto :exitError
 
 call build.cmd utils
 if %errorlevel% NEQ 0 goto :exitError
 
 call build.cmd gui
 if %errorlevel% NEQ 0 goto :exitError
 
 call build.cmd engine
 if %errorlevel% NEQ 0 goto :exitError
 
 call build.cmd angular
 if %errorlevel% NEQ 0 goto :exitError
 
 call build.cmd angular-material-core
 if %errorlevel% NEQ 0 goto :exitError
 
@echo [Build done.]
exit /b 0

 :exitError
   echo [errorlevel2: %errorlevel% ]
   exit /b 1

