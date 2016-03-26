#!/bin/bash
dir=$1

resultFile=`ls $dir/result*`
cat $resultFile | awk '/AllocationTimeCount/{print $0}' > aa
cat $resultFile | awk '/RefTimeCount/{print $0}' >> aa
mv aa RESULT

function makeRegularFig {
	data=$1
	figname=$2
	datatype=$3

	name=`echo $f | awk '{gsub(/\//,""); print $1}'`
		number=`echo $name | awk -v c1=$3 '{gsub(/[A-Za-z]/,""); gsub(/c1/,""); print $1}'`

	continue=`cat $data | awk 'BEGIN{united=1}{temp=0; if ($2==0){temp=1} else {temp=0}; united=united&&temp}END{if (united==1) print "NO"}'`
	echo $data "   " $continue
	if [ "$continue" != "NO" ]; then

	echo $datatype
	echo $number
	strout=`cat RESULT | grep $datatype | grep "$number " |  awk '{gsub(/numberOfObjects/,"numObjs"); print $0}'`
	echo "STRRRRRRRRRR" $strout

	echo " set terminal pdf 
	set output \"$figname\"
	set xrange[0:1.1]
	set ylabel \" Number of objects allocated  \"
	set xlabel \" Time (measured in number of events on objects \"
		plot  \"$data\"  using 1:2 with linespoint pt 3 title \"$strout\"" > count.gp && gnuplot count.gp
		#rm count.gp -f
		fi
}

function makeAllFigs {
    dir=$1
    ptype=$2
    TCFiles=`ls $dir/$ptype*`
        for f in $TCFiles
            do
                name=`echo $f | awk '{gsub(/\//,""); print $1}'`
                makeRegularFig $f TCFig-$name.pdf $3 
            done
        pdftk  TCFig*pdf output finishedTCF$ptype.pdf
        rm TCFig*pdf -f
        mv finishedTCF$ptype.pdf $dir
}

pointType=dataTimeCountAllocationTimeCount
makeAllFigs  $dir  $pointType  AllocationTimeCount

pointType=dataTimeCountRefTimeCount
makeAllFigs  $dir  $pointType  RefTimeCount
