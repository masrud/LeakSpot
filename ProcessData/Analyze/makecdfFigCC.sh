#!/bin/bash

cdfdata=$1
name=$2
titleCCSlope=$3
echo "title................"
echo $titleCCSlope

titleinfig=`echo $titleCCSlope | awk '{print "Site="$1 " " $3 " N="$5 " slope="$7 " int=" $9 " CC=" $11 }'`
echo "GGGGGGGGGGG" "$titleinfig"

echo " set terminal pdf  
set output \"$name.pdf\"
set yrange [0:1.1]
set xrange [0:1.1]
set xlabel \"Time measured in number of accesses on the objects for a specific allocation site\"
set ylabel \"CDF of Object Recency for One allocation Site\"
plot  \"$cdfdata\" using 2:3 title \"$titleinfig\" with linespoint " > count.gp && gnuplot count.gp

#rm count.gp -f

