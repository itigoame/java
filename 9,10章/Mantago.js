package enemy;

import character.Thief;

public class Matango {
  int hp = 50;
  char suffix;
  public Matango(char suffix) {
    this.suffix = suffix;
  }
  public void attack(Thief t) {
    System.out.println("キノコ" + this.suffix + "の攻撃");
    System.out.println("10のダメージ");
    System.out.print(t.hp + "から");
    t.hp -= 10;
    System.out.println(t.hp + "にHPが減った!");
  }
}


