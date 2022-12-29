package test;

public class Test {
	public static void main(String[] args) {
		introduceOnself("空", 11, 140, '犬');
		email("こんにちは","abc@gmail.com","初めまして");
		email("abc@gmail.com","初めまして");
		double triangleArea = calcTriangleArea(10.0,5.0);
		double circleArea = calcCircleArea(5.0);
		System.out.println("三角形の面積" + triangleArea + ",円の面積" + circleArea);
	}

	public static void introduceOnself(String name,int age,int height,char zodiac){
		System.out.println(name + "です。" + age + "歳で干支は" + zodiac + "です" + "身長は" + height + "です。");
	}

	public static void email(String title,String address,String text) {
		System.out.println(address + "に以下のメールを送信しました");
		System.out.println("件名:" + title);
		System.out.println("本文:" + text);
	}
	public static void email(String address,String text) {
		System.out.println(address + "に、以下のメールを送信しました");
		System.out.println("件名:無題");
		System.out.println("本文:" + text);


	public static double calcTriangleArea(double bottom,double height) {
		double triangleArea = bottom * height / 2;
		return triangleArea;
	}

	public static double calcCircleArea(double radius) {
		double circleArea = radius * radius * 3.14;
		return circleArea;
	}

}
