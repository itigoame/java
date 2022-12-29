package main;
import character.Thief;
import enemy.Matango;
import enemy.PoisonMatango;
public class main {

	public static void main(String[] args) {
		// TODO 自動生成されたメソッド・スタブ
//		Cleric cle = new Cleric();
//		cle.selfAid();
//		cle.pray(3);
//
		Thief thi = new Thief("シーフ",100,23);
		Matango mat = new Matango('A');
		PoisonMatango pm = new PoisonMatango('B');
//		mat.attack(thi);
		pm.attack(thi);
	}

}
.