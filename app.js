import java.util.Scanner;

public class story {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);


		System.out.println("It is 2 am");
		System.out.println("You wake up because you hear something from downstairs...");
		System.out.println("You live in a bad area.");
		System.out.println("You are thinking about going down stairs to check. ");
		System.out.println("From a scale from 1 to 10, how badly do you want to check?" );
		int fear1 = sc.nextInt();
		if (fear1 >= 3) {
			System.out.println("You have a shotgun.");
			System.out.println("Bring the shotgun? (The higher the number, the more likely you are to do it)");
			int shotgun1 = sc.nextInt();
			if (shotgun1 >= 5) {
				System.out.println("You take the shotgun downstairs...");
				System.out.println("You notice the curtains moving...");
				System.out.println("Fire your shotgun? ");
				int shotgun2 = sc.nextInt();
				if (shotgun2 >= 8) {
					System.out.println("You fire your shotgun");
					System.out.println("You hear the whimpering of a dog");
					System.out.println("You just killed your dog");
					System.out.println("Game over");
				} else {
					System.out.println("It's a difficult choice to shoot your shotgun, but you chose not to...");
					System.out.println("The curtains continue to move...");
					System.out.println("Your dog jumps out of the curtains");
					System.out.println("You've been safe this whole time");
					System.out.println("You return to bed");
					System.out.println("You win");
				}
			} else {
				System.out.println("You slowly walk down stairs without your shotgun...");
				System.out.println("What's this? you notice movement in your curtains");
				System.out.println("Approach your curtains?");
				int approach1 = sc.nextInt();
				if (approach1 >= 7) {
					System.out.println("You approach your curtains...");
					System.out.println("You notice it was your dog making all the noise "
							+ "this whole time");
					System.out.println("You pet your dog, and return to bed");
					System.out.println("You win");
				} else {
					System.out.println("You think it would be best to not approach the curtains");
					System.out.println("The noise gets louder and louder...");
					System.out.println("You are still waking up, and it is very dark. "
							+ "Your vision is obscured because you are slightly peeking past the wall");
					System.out.println("Should you call the cops?");
					int cops1 = sc.nextInt();
					if (cops1 >= 9) {
						System.out.println("The cops immediately come over");
						System.out.println("As the cops come to the door, your dog jumps out from the curtains");
						System.out.println("You answer the door and explain to them it was just your dog making all that noise");
						System.out.println("The cops shake their head and laugh at you. Embarassing");
						System.out.println("Game over");
					} else {
						System.out.println("You decide not to call the cops...");
						System.out.println("The noise gets louder and louder");
						System.out.println("You contemplate that you should have brought your shotgun... but it's too late");
						System.out.println("You are still waking up, and your vision "
								+ "is obscured");
						System.out.println("A shadowy figure comes from the curtains "
								+ "and approaches you...");
						System.out.println("It is just your dog");
						System.out.println("You pet your dog and go back to sleep");
						System.out.println("You win");
					}
				}
			}
		} else {
			System.out.println("You decide to go back to sleep, regardless of the noise from downstairs");
			System.out.println("You get nightmares that a murderer was in your house");
			System.out.println("The murderer in your dreams approaches you, and you die");
			System.out.println("You wake up from your dream, and you peed yourself lmao embarassing");
			System.out.println("Game over");
		}
	}

}
