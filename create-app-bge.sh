#!/bin/bash
GAME_PATH=$(dirname $0)/apps/$1
echo "creating folder $1 in apps"
options=$(getopt --long use_temp: $@)
echo $options
eval set -- "$options"
    while true; do
        case "$1" in
        --use_temp)
            shift; # The arg is next in position args
            USE_TEMP=$1
            ;;
        --)
            shift
            break
            ;;
        esac
        shift
    done

mkdir $GAME_PATH
cd $GAME_PATH
echo "adding template folders"
(! test -z $USE_TEMP) && ( echo ../../temps/$USE_TEMP/* ; cp -r ../../temps/$USE_TEMP/* ./; ) || ( cp -r ../../engine/installer/temp/* ./; )
