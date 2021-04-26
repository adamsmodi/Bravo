@ECHO OFF
SETLOCAL

SET arch=x64
SET runtime=win-%arch%
SET framework=net5.0-windows
SET configuration=Release
SET verbosity=Minimal
SET publishfolder=%~dp0src\Sqlbi.Bravo\bin\%configuration%\%framework%\%runtime%\publish

CD /d "%~dp0"
IF EXIST %publishfolder% RMDIR /s /q %publishfolder%
dotnet publish .\src\Sqlbi.Bravo\Sqlbi.Bravo.csproj --configuration %configuration% --runtime %runtime% --output %publishfolder% --self-contained true --verbosity %verbosity% --force --nologo

REM Ignore errors
REM    error LGHT0204 : ICE80: This 64BitComponent pbitool.json uses 32BitDirectory POWERBIEXTERNALTOOLSFOLDER
REM    warning LGHT1076 : ICE61: This product should remove only older versions of itself [...]
REM Enable windows installer logging
REM    msiexec /i "C:\temp\installer.msi" /L*V "C:\temp\file.log"

CD /d "%~dp0installer"
IF EXIST *.msi    DEL *.msi
IF EXIST *.wixobj DEL *.wixobj
IF EXIST *.wixpdb DEL *.wixpdb
.\wix\311\heat.exe dir "%publishfolder%" -gg -scom -srd -sreg -sfrag -templatefragment -cg ComponentsAutogenerated -dr INSTALLFOLDER -var var.PublishFolder -t Transform.xslt -out Components.wxs -nologo
.\wix\311\candle.exe Components.wxs -dPublishFolder="%publishfolder%" -arch "%arch%" -nologo
.\wix\311\candle.exe Product.wxs -arch "%arch%" -dPublishFolder="%publishfolder%" -nologo
.\wix\311\light.exe Product.wixobj Components.wixobj -ext WixUIExtension.dll -ext WixUtilExtension.dll -cultures:en-us -loc Product_en-us.wxl -out "Bravo-%arch%-en-us.msi" -nologo

EXIT /b %ERRORLEVEL%
