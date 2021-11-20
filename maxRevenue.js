function maxRevenueFromStocks(prices, algo, k){
    let N = prices.length;
    current_sum = 0
    for (let i=0; i<N; i++)
   {   
       p = prices[i]
      if (algo[i] == 1 || i < k)
            current_sum += p
      else
        current_sum -= p;
  }
    max_sum = current_sum
   
    for(let j=k; j<N; j++) {
      incoming = prices[j]
      outgoing = prices[j-k]
      if (algo[j] == 0)
        current_sum += 2 * incoming
      if (algo[j-k] == 0)
        current_sum -= 2 * outgoing
      if (current_sum > max_sum)
        max_sum = current_sum
    }
    return max_sum
  }