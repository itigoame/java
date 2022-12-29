package test;
import java.util.Scanner;
public class Test6 {

	public static void main(String[] args) {
		// TODO 自動生成されたメソッド・スタブ
		for(int i = 0; i < 10; ++i){
			System.out.println("SPAM");
		}
		for(int i = 1; i < 10; ++i){
			System.out.println(i * 3);
		}
		int a = 2;
		for(int i = 1;i < 9; ++i){
			a = a * 2;
			System.out.println(a);
		}
		int a = 1;
		for(int i = 7;i > 0; --i) {
			a *= i;
		}
		System.out.println(a);

		Scanner scanner = new Scanner(System.in);
		int numbers = 0;
		for(int i = 0; i < 11; ++i) {
			int number = scanner.nextInt();
			numbers += number;
		}
		System.out.println("平均" + numbers / 10);

		int win = 0;
		int low = 0;
		for(int i = 0; i <10; ++i) {
			int game = scanner.nextInt();
			if(game == 1) {
				++win;
			} else if(game == 0) {
				++low;
			} else {
				System.out.println("入力が正しくありません");
			}
		}
		System.out.println("勝利数:" + win + "回");
		System.out.println("敗北数:" + low + "回");

		int totalKyojin = 0;
		int totalHansin = 0;
		int time = 1;
		for(int i = 1; i < 10; ++i) {
			System.out.print(time + "回表、巨人の得点は?");
			int kyojin = scanner.nextInt();
			totalKyojin += kyojin;
			System.out.print(time + "回裏、阪神の得点は?");
			int hansin = scanner.nextInt();
			totalHansin += hansin;
			++time;
		}
		System.out.println("巨人:" + totalKyojin + "点、阪神:" + totalHansin + "点");

		if(totalKyojin < totalHansin) {
			System.out.println("阪神の勝ち");
		} else {
			System.out.println("巨人の勝ち");
		}

		int maxNumber = 0;
		for(int i = 1;i < 11; ++i) {
			int number = scanner.nextInt();
			if(number > maxNumber) {
				maxNumber = number;
			}
		}
		System.out.println("最大値" + maxNumber);

		int maxNumber = 0;
		int minNumber = 0;
		for(int i = 1;i < 11; ++i) {
			int number = scanner.nextInt();
			if(number > maxNumber) {
				maxNumber = number;
			}else if(number < minNumber) {
				minNumber = number;
			}
		}
		System.out.println("最大値" + maxNumber);
		System.out.println("最小値" + minNumber);


		int amount = scanner.nextInt();
		for(int i = 0; i < amount; ++i) {
			System.out.print("* ");
		}


		int count = scanner.nextInt();
		for(int i = 0,out = 0; i < count; ++i) {
			System.out.print(++out);
			if(out == 9) {
				out = 0;
			}
		}
		int total = 0;
		while(total < 100) {
			int number = scanner.nextInt();
			total += number;
		}
		System.out.println("合計値" + total);

		int strike = 0;
		int ball = 0;
		System.out.println("ストライク = 1,ボール = 2");
		while(strike < 3 && ball < 4) {
			System.out.print("入力:");
			int number = scanner.nextInt();
			if(number == 1) {
				++strike;
			} else {
				++ball;
			}
		}
		System.out.println("ストライク" + strike + "ボール" + ball);

		int strike = 0;
		int ball = 0;
		int faul = 0;
		System.out.println("ストライク = 1,ボール = 2,ファウル = 3");
		while(strike < 3 && ball < 4) {
			System.out.print("入力:");
			int number = scanner.nextInt();
			if(number == 1) {
				++strike;
			} else if(number == 2) {
				++ball;
			} else if (number == 3 && strike < 2) {
				++strike;
			}
		}
		System.out.println("ストライク" + strike + "ボール" + ball);

		int number = scanner.nextInt();
		int a = 0;
		for(int i = 2; i < number; ++i) {
			if(number % i == 0) {
				++a;
			}
		}
		if(a > 0) {
			System.out.println("素数ではない");
		} else {
			System.out.println("素数");
		}
		System.out.print("何の段を計算しますか?");
		int number = scanner.nextInt();
		for(int i = 1; i <= 9; ++i) {
			System.out.println(number * i);
		}

		int total = 0;
		int i = 1;
		while(i != 0) {
			i = scanner.nextInt();
			total += i;
		}
		System.out.println("合計は" + total);

		int total = 0;
		int amount = 0;
		int i = 1;
		while(i != 0) {
			i = scanner.nextInt();
			total += i;
			if(i != 0) {
				++amount;
			}
		}
		System.out.println("平均は" + total / amount);

		int n = scanner.nextInt();
		for(int i = 1; i <= n; ++i) {
			for( int a = 1; a <= i ; ++a) {
				System.out.print("$");
			}
			System.out.println();
		}

		int number = scanner.nextInt();
		for(int i = 0; i < number; ++i) {
			for(int a = 0; a < number; ++a) {
				if(i == a || (number - i - 1) == a) {
					System.out.print("X");
				} else {
					System.out.print(" ");
				}
			}
			System.out.println();

		}
	}

}
