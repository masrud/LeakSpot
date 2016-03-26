#!/bin/bash 
dir=$1

benchmarks=`ls $dir`
for f in $benchmarks
do
	echo $dir$f
	bash makeallcdf.sh $dir$f
	bash makeallcount.sh $dir$f
done

