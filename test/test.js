- 1問目
1〜10までの数字のうち偶数のみを昇順で表示させる
- 2問目
1〜10までに偶数が何個あるか、また偶数の合計は幾つになるか表示させる
- 3問目
1〜10までの整数をカンマ区切りで横並びで表示させる
(10にはカンマをつけない)
- 4問目
要素数20の配列を宣言し、要素に0から5ずつ加算して代入させる。[0]~[10]の値の
奇数のみカンマ区切りで、[11]~[19]の値は偶数をカンマ区切りで表示させる

package myProject;

public class Main {


	public static void main(String[] args) {
	   int count = 0;
	    int total = 0;
	    for (int i = 1; i <= 10; ++i) {
	      if (0 == i % 2){
	        System.out.println(i);
	        count += 1;
	        total += i;
	      }
	    }
	  System.out.println(count);
	  System.out.println(total);

	  for (int n = 1; n <= 10; ++n) {
		  if (n != 10) {
			  System.out.print(n + ",");
		  } else {
			  System.out.println(n);
		  }
	  }

	  int[] numbers = new int[20];
	  int num = 0;
		for(int number = 0; number <= 19; ++number) {
			numbers[number] = num;
				num += 5;

			if (number <= 10 && num % 2 == 0) {
				System.out.println("偶数");
				System.out.println(num + ",");
			} else if (number > 10 && num % 2 != 0){
				System.out.println("奇数");
				System.out.println(num + ",");
			}

		}
//		System.out.println(Arrays.toString(numbers));




	}

}
