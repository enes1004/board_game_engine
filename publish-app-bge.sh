#!/bin/bash
GAME_PATH=$(dirname $0)/apps/$1
echo "copying folder $1 in apps to publish"
cp -r $GAME_PATH $(dirname $0)/publish
options=$(getopt --long no_engine: $@)
echo $options
eval set -- "$options"
    while true; do
        case "$1" in
        --no_engine)
            shift; # The arg is next in position args
            NO_ENGINE=$1
            ;;
        --)
            shift
            break
            ;;
        esac
        shift
    done


(! test -z $NO_ENGINE) && (echo "engine not added";) || (echo "copying engine"; cp -r $(dirname $0)/engine/bge $GAME_PATH/; )
