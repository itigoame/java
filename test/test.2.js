package test;

public class test2 {

	public static void main(String[] args) {
		// TODO 自動生成されたメソッド・スタブ
		//1. int形で要素数３の配列numbersを準備します。この時初期値はそれぞれ３，４，９とします
		int[] numbers = new int[3];
		numbers[0] = 3;
		numbers[1] = 4;
		numbers[2] = 9;
		System.out.println("一桁の数字を入力してください");
		int input = new java.util.Scanner(System.in).nextInt();
		for(int a:numbers) {
			if( input == a) {
				System.out.println("アタリ");
				break;
			} else {
				System.out.println("ハズレ");
				break;
			}
		}
	}

}