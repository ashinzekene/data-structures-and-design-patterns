import java.util.Arrays;
import java.util.Scanner;

class QuickFind {
  public static void main(String args[]) {
    System.out.println("Hello, Dynamic connectivity algorithm");
    Scanner sc = new Scanner(System.in);
    int N = sc.nextInt();
    UF uf = new UF(N);
    while (sc.hasNextInt()) {
      int a = sc.nextInt();
      int b = sc.nextInt();
      if (uf.isConnected(a, b)) {
        System.out.println("" +a + " and " + "" +b + " already conected");
      } else {
        uf.union(a, b);
        System.out.print(a + " " + b);
      }
    }
    sc.close();
  };
}

/**
 * UF
 */
class UF {
  private int[] ids;

  UF (int number) {
    ids = new int[number];
    for (int i = 0; i < ids.length; i++) {
      ids[i] = i;
    }
    System.out.println(Arrays.toString(ids));
  }

  public void union(int a, int b) {
    int oldId = ids[a];
    int newId = ids[b];
    for (int i = 0; i < ids.length; i++) {
      if (ids[i] == oldId) {
        ids[i] = newId;
      }
    }
    System.out.println(Arrays.toString(ids));
  }

  public boolean isConnected(int a, int b) {
    return ids[a] == ids[b];
  }

}