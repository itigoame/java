package character;

import java.util.Random;

public class Cleric {
	String name = "Cleric";
	int hp = 50;
	final int MAXHP = 50;
	int mp = 10;
	final int MAXMP = 10;


	public void selfAid() {
		System.out.println("セルフエイド！");
		this.mp -= 5;
		this.hp = MAXHP;
		System.out.println("HPが" + this.hp + "になった");
	}

	public int pray(int sec) {
		int healMp = 0;
		System.out.println("祈る");
		Random rand = new Random();
		if(this.mp >= this.MAXMP) {
			System.out.println("MPは既に満タンです");
		} else {
			healMp = rand.nextInt(3) * sec;
			this.mp += healMp;
			if(this.mp >= this.MAXMP) {
				this.mp = this.MAXMP;
			}
			System.out.println(sec + "秒祈ったことで" + this.name + "のMPが"+ healMp + "回復した");
		}
		System.out.println("現在のMPは" + this.mp + "MAXMPは" + this.MAXMP);
		return healMp;
	}


}
.