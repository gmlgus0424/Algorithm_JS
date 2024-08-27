const solution = (order) => order.reduce((acc, cur) => acc + (cur.includes('coffee') ? 5000 : 4500), 0)
