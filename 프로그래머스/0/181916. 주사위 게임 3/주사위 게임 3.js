function solution(a, b, c, d) {
    if(a===b&& a===c && a===d) return 1111* a
    
    if(a===b&& a===c) return (10*a +d)**2
    if(a===b&& a===d) return (10*a +c)**2
      if(a===c&& a===d) return (10*a +b)**2
    if(b===c&& b===d) return (10* b+a)**2
    
     if(a===b&& c===d) return(a+c) * Math.abs(a-c)
     if(a===c&& b===d) return (a+b) * Math.abs(a-b)
     if(a===d&& b===c) return (a+b) * Math.abs(a-b)
    
    if(a===b)return c*d
     if(a===c)return b*d
     if(a===d)return c*b
     if(c===b)return a*d
     if(d===b)return c*a
     if(c===d)return a*b
    
    
    return Math.min(a,b,c,d)
} 