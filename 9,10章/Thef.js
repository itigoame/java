package character;

public class Thief {
	String name;
	public int hp;
	int mp;
	
	public Thief(String name,int hp, int mp) {
		this.name = name;
		this.hp = hp;
		this.mp = mp;
		System.out.println("名前: " + name + "  HP: " + hp + "  MP: " + mp);
	}
	public Thief(String name,int hp) {
		this(name,hp,5);
	}
	public Thief(String name) {
		this(name,40,5);
	}
}
