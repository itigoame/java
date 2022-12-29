package enemy;

import character.Thief;

public class PoisonMatango extends Matango {
	int poisonCount = 5;
	public PoisonMatango(char suffix) {
		super(suffix);
	}

	public void attack(Thief t) {
		super.attack(t);
		if(this.poisonCount >= 0) {
			System.out.println("さらに毒の胞子をばら撒いた!");
			int damege = t.hp /5;
			System.out.println(damege + "ポイントのダメージ!");
			-- poisonCount;
			System.out.print(t.hp + "から");
			t.hp -= damege;
		    System.out.println(t.hp + "にHPが減った!");
		}
	}
}
