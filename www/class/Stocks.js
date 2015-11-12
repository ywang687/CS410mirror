
function Stocks(){

var fee = 0, feeRate = 0.6, stockPrice = 0, shares = 0, securitiesGPV = 0, cash = 4000, maxLeverage = 2, netLiquidation = securitiesGPV+cash, availableFunds = maxLeverage*netLiquidation, leverage = securitiesGPV/netLiquidation;

// fee
this.getStocksFee = function(){
  return fee;
}

this.setStocksFee = function(newFee){
  fee = newFee;
}

// feeRate
this.getStocksFeeRate = function() {
  return feeRate;
}

this.setStocksFeeRate = function(newFeeRate) {
  feeRate = newFeeRate;
}

// stockPrice
this.getStocksStockPrice = function(){
  return stockPrice;
}

this.setStocksStockPrice = function(newStockPrice){
  stockPrice = newStockPrice;
}

// shares
this.getStocksShares = function(){
  return shares;
}

this.setStocksShares = function(newShares){
  shares = newShares;
}

// securitiesGPV
this.getStocksSecuritiesGPV = function(){
  return securitiesGPV;
}

this.setStocksSecuritiesGPV = function(newSecuritiesGPV){
  securitiesGPV = newSecuritiesGPV;
}

// Cash
this.getStocksCash = function() {
  return cash;
}

this.setStocksCash = function(newCash) {
  cash = newCash;
}

this.addStocksCash = function(newCash) {
  cash = cash + newCash;
}

this.subtractStocksCash = function(newCash) {
  if (cash - newCash > 4000){
    cash = cash - newCash;
  }
  else{
    alert("You can't take that much money or you'll go below minimum trading account size.");
  }
}

// maxLeverage
this.getStocksMaxLeverage = function(){
  return maxLeverage;
}

this.setStocksMaxLeverage = function(newMaxLeverage){
  maxLeverage = newMaxLeverage;
}

// netLiquidation
this.getStocksNetLiquidation = function() {
  return netLiquidation;
}

this.setStocksNetLiquidation = function(newNetLiquidation) {
  netLiquidation = newNetLiquidation; 
}

// availableFunds
this.getStocksAvailableFunds = function(){
  return availableFunds;
}

this.setStocksAvailableFunds = function(newAvailableFunds){
  availableFunds = newAvailableFunds;
}

// leverage
this.getStocksLeverage = function(){
  return leverage;
}

this.setStocksLeverage = function(newLeverage){
  leverage = newLeverage;
}

this.showStockPrice = function(){
  $('#stockPrice').html('Current Stock Price: $'+ data[data.length-1].toFixed(2));
}

this.showNetLiquidation = function(){
  $('#netLiquidation').html('Net Liquidation: $'+ netLiquidation.toFixed(2));
}

this.showShares = function(){
  $('#shares').html('Number of Shares: '+ shares);
}

this.showSecuritiesGPV = function(){
  $('#securitiesGPV').html('Securities GPV: $'+ securitiesGPV.toFixed(2));
}

this.showCash = function(){
  $('#cash').html('Cash: $'+ cash.toFixed(2));
}

this.showAvailableFunds = function(){
  $('#availableFunds').html('Available Funds: $'+ availableFunds.toFixed(2));
}

this.showLeverage = function(){
  $('#leverage').html('Leverage: '+ leverage.toFixed(1));
}

this.showFees = function(){
  $('#transactionFee').html('Transaction Fees Paid: $'+ fee.toFixed(2));
}

}