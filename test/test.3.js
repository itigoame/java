package test;

public class Test3 {

	public static void main(String[] args) {
		// TODO 自動生成されたメソッド・スタブ
		System.out.println("Hello World");


		int x = 11;
		System.out.println("x=" + x);


		x = 13;
		int y = 17;
		System.out.println("x=" + x + ",y=" + y);


		x = x + y;
		System.out.println("x=" + x);


		System.out.println(13 * 17);


		x = 7;
		x *= 3;
		System.out.println("x=" + x);
		x /= 2;
		System.out.println("x=" + x);


		x = 3;
		y = 7;
		int w = y;

		y = x;
		x = w;
		System.out.println("x=" + x + ",y=" + y);


		x = 19;
		y = 23;
		int z = x * y;
		System.out.println("z=" + z);


		x = 2;
		for(int i = 2; i < 5; ++i) {
			int a = x * i;
			System.out.println(a);
		}


		x = 2;
		x = 2;
		for(int i = 1; i < 4; ++i) {
			x = x * x;
			System.out.println(x);
		}


		x = 11;
		System.out.println("商" + (x / 3) + ",余り" + (x % 3));

		x = 2;
		System.out.println(++x);
		System.out.println(--x);

	}

}
