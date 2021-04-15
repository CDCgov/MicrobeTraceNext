# COMMON PATHS

$buildFolder = (Get-Item -Path "./" -Verbose).FullName
$slnFolder = Join-Path $buildFolder "../"
$outputFolder = Join-Path $buildFolder "outputs/"
$soucepath =Join-Path $slnFolder        "build/outputs/Host/ClientApp/dist/*"
$destinationpath = Join-Path $slnFolder "build/outputs/Host/wwwroot"

$webHostFolder = Join-Path $slnFolder "MicrobeTraceNext"
$destinationpathdockerfile= Join-Path $webHostFolder "Dockerfile"
$outputFolderDockerfile= Join-Path $outputFolder "Host"

$prexistingData1 = Join-Path $buildFolder "outputs\*"
$prexistingData2 = Join-Path $webHostFolder "\wwwroot\dist\*"

## CLEAR ######################################################################

Remove-Item $outputFolder -Force -Recurse -ErrorAction Ignore
New-Item -Path $outputFolder -ItemType Directory -ErrorAction Ignore

Remove-Item -Path $prexistingData1 -Recurse -ErrorAction Ignore
Remove-Item -Path $prexistingData2 -Recurse -ErrorAction Ignore

## RESTORE NUGET PACKAGES #####################################################

Set-Location $slnFolder
dotnet restore MicrobeTraceNext.sln

## PUBLISH WEB Host PROJECT ###################################################

Set-Location $webHostFolder
yarn

dotnet publish --output (Join-Path $outputFolder "Host")


#######Dist folder out out of ####################################


copy-Item -path $soucepath  -Destination $destinationpath -Force -Recurse
copy-Item -path $destinationpathdockerfile  -Destination $outputFolderDockerfile -Force -Recurse

## CREATE DOCKER IMAGES #######################################################
	


# Host
Set-Location (Join-Path $outputFolder "Host")

docker rmi samples/microbetracenext -f
docker build -t samples/microbetracenext .

## DOCKER COMPOSE FILES #######################################################

Copy-Item (Join-Path $slnFolder "docker/host/*.*") $outputFolder

## FINALIZE ###################################################################

##Set-Location $outputFolder

Set-Location $buildFolder