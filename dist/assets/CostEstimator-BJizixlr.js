class n{static async estimate(a,t){const e=Math.ceil(a.length/1024);return{estimatedFeeStroops:1e5+e*2e3+t.length*1500,footprintKb:e,argCount:t.length}}}export{n as CostEstimator};
