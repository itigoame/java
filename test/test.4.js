package test;
import java.util.Scanner;
public class Test4 {

	public static void main(String[] args) {
		// TODO 自動生成されたメソッド・スタブ
		Scanner scanner = new Scanner(System.in);

		String s = scanner.next();
		System.out.println(s);


		int x = scanner.nextInt();
		for(int i = 1; i < 4; ++i) {
			x = x * x;
			System.out.println(x);
		}


		int x1 = scanner.nextInt();
		int y1 = scanner.nextInt();
		System.out.println("和" + (x1 + y1) + ",差" + (x1 - y1) + ",積" + (x1 * y1)+ ",商" + (x1 / y1) + "余り" + (x1 % y1));


		int a = scanner.nextInt();
		int b = scanner.nextInt();
		System.out.println((a + b) / 2);

		System.out.print("年齢を入力してください");
		int age = scanner.nextInt();
		System.out.println(age * 365 + "日");
	}

}
