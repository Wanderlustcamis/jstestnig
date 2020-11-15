var healthy = new Object ()
healthy.food = "juice";
healthy.life = "yoga";
healthy.living ="exercise" ;

  function health(food,life,living){
    this.food=food;
    this.life=life;
    this.living=living;
}
this.cal = function Cal (n1, ope, n2) {
  n1= Number(n1)
  n2= Number (n2)
    switch (ope){
      case "+":
        return n1 + n2
        break
      case "-":
        return n1 - n2
        break
      case "*":
        return n1 * n2
        break
      case "/":
        return n1 / n2
        break
      default:
       console.error("NAN")
    }

}
