@echo off
@echo === Magic Engine Build Utility ===

@echo [Removing existing dist\%1 folder...]
@call .\node_modules\.bin\rimraf dist\@magic\%1
call ng build %1
if %errorlevel% NEQ 0 goto :exitError
cpx ./EULA.pdf ./dist/%%N/ -C
if %errorlevel% NEQ 0 goto :exitError
echo [Build %1 done.]
exit /b 0



 :exitError
   echo [errorlevel: %errorlevel% ]
   exit /b 1