package test;
import java.util.Scanner;

public class Test {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("ようこそ占いの館へ");
		System.out.println("あなたの名前を入力してください");
		String name = scanner.next();
		System.out.println("あなたの年齢を入力してください");
		String ageString = scanner.next();
		int age = Integer.parseInt(ageString);
		int fortune = new java.util.Random().nextInt(3);
		++ fortune;
		System.out.println("占いの結果が出ました!");
		System.out.println(age + "歳の" + name + "さん、あなたの運気番号は" + fortune + "です");
		System.out.println("1:大吉 2:中吉 3:吉 4:凶");


		int isHungry = 1;
		String food = "苺";
		System.out.println("こんにちは");
		if(isHungry == 0) {
			System.out.println("お腹がいっぱいです");
		} else {
			System.out.println("腹ペコです");
			System.out.println(food + "を食べます");
		}
		System.out.println("ごちそうさまでした");


		System.out.print("1:検索 2:登録 3:削除 4:変更>");
		int selected = scanner.nextInt();

		switch (selected) {
			case 1: {

				System.out.println("検索します");
				break;
			}
			case 2: {

				System.out.println("登録します");
				break;
			}
			case 3: {

				System.out.println("削除します");
				break;
			}
			case 4: {

				System.out.println("変更します");
				break;
			}
		}


		System.out.println("数当てゲーム");
		int ans = new java.util.Random().nextInt(10);
		for(int i = 0; i < 5; ++i) {
			System.out.println("0 ~ 9の数字を入力してください");
			int num = scanner.nextInt();
			if(num == ans) {
				System.out.println("アタリ！");
			} else {
				System.out.println("違います");
			}
		}
		System.out.println("ゲームを終了します");


		int[] points = new int[4];
		double[] whights = new double[5];
		boolean[] answers = new boolean[3];
		String[] names = new String[3];

		int [] moneyList = {121902,8302,55100};
		for (int i = 0; i < moneyList.length; ++i) {
			System.out.println(moneyList[i]);
		}
		for(int monye:moneyList) {
			System.out.println(monye);
		}


		Scanner scanner = new Scanner(System.in);
		int [] numbers = {3,4,9};
		System.out.println("1桁の数字を入力してください");
		int input = scanner.nextInt();
		for(int number:numbers) {
			if(number == input) {
				System.out.println("アタリ!");
			}
		}

	}
}
