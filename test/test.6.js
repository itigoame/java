package test;

import java.util.Scanner;

public class Test1 {

	public static void main(String[] args) {
		// TODO 自動生成されたメソッド・スタブ
		Scanner scanner = new Scanner(System.in);

		int [] numbers = new int[10];
		for(int i = 0; i < 10; ++i) {
			int number = scanner.nextInt();
			numbers[i] = number;
		}

		for (int n = 0; n < numbers.length; ++n) {
			System.out.println(numbers[n]*2);
		}


		int [] numbers = new int[10];
		for(int i = 0; i < 10; ++i) {
			int number = scanner.nextInt();
			numbers[i] = number;
		}

		for(int n = 9; n < numbers.length; --n) {
			System.out.println(numbers[n]);
		}


		int [] numbers = new int[10];
		for(int i = 0; i < 10; ++i) {
			int number = scanner.nextInt();
			numbers[i] = number;
		}

		boolean a = true;
		boolean b = true;
		for (int number:numbers) {
			if(number % 2 == 0) {
				if(a == true) {
					System.out.print("\n偶数:");
				}
				System.out.print(number + " ");
				a = false;
			}
		}

		for(int number:numbers) {
			if(number % 2 != 0) {
				if(b == true) {
					System.out.print("\n奇数:");
				}
				b = false;
				System.out.print(number + " ");
			}
		}


		int numbers[] = new int[10];

		for(int i = 0,number = 0; i < 10 && number < 100; ++i) {
			numbers[i] = scanner.nextInt();
			number += numbers[i];

		}
		for(int number:numbers) {
			System.out.println(number);
		}


		int kuku[][] = new int[9][9];

		for( int i = 0 ; i < 9 ; i++ )
		    for( int j = 0 ; j < 9 ; j++ )
		        kuku[i][j] = ( i + 1 ) * ( j + 1 );

		for( int i = 0 ; i < 9 ; i++ )
		{
		    for( int j = 0 ; j < 9 ; j++ )
		        System.out.printf( " %2d", kuku[i][j] );

		    System.out.println();
		}



	}

}
