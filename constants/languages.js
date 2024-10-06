export const supportedLanguages = [
  {
    language: "javascript",
    version: "18.15.0",
    aliases: ["nodejs", "js", "node-javascript", "javascript"],
    runtime: "node",
    extensions: [".js", ".jsx"],
  },
  {
    language: "typescript",
    version: "5.0.3",
    aliases: ["ts", "typescript", "tsx"],
    extensions: [".ts", ".tsx"],
  },
  {
    language: "php",
    version: "8.2.3",
    aliases: ["php"],
    extensions: [".php"],
  },
  {
    language: "python",
    version: "3.10.0",
    aliases: ["py", "python3"],
    extensions: [".py"],
  },
  {
    language: "ruby",
    version: "3.0.1",
    aliases: ["rb", "ruby"],
    extensions: [".rb"],
  },
  {
    language: "rust",
    version: "1.68.2",
    aliases: ["rs", "rust"],
    extensions: [".rs"],
  },
  {
    language: "csharp",
    version: "6.12.0",
    aliases: ["c#", "cs"],
    runtime: "mono",
    extensions: [".cs"],
  },
  {
    language: "cpp",
    version: "10.2.0",
    aliases: ["c++", "g++", "cpp"],
    runtime: "gcc",
    extensions: [".cpp", ".cxx", ".cc"],
  },
  {
    language: "go",
    version: "1.16.2",
    aliases: ["golang", "go"],
    extensions: [".go"],
  },
  {
    language: "java",
    version: "15.0.2",
    aliases: ["java"],
    extensions: [".java"],
  },
  {
    language: "c",
    version: "10.2.0",
    aliases: ["gcc", "c"],
    runtime: "gcc",
    extensions: [".c"],
  },
];

export const initialCodeSnippets = {
  javascript: `function add(a, b) {
    return a + b;
  }
  console.log(add(3, 4));`, // Output: 7

  typescript: `function add(a: number, b: number): number {
    return a + b;
  }
  console.log(add(3, 4));`, // Output: 7

  php: `function add($a, $b) {
    return $a + $b;
  }
  echo add(3, 4);`, // Output: 7

  python: `def add(a, b):
      return a + b
  print(add(3, 4))`, // Output: 7

  ruby: `def add(a, b)
    a + b
  end
  puts add(3, 4)`, // Output: 7

  rust: `fn add(a: i32, b: i32) -> i32 {
    a + b
  }
  fn main() {
    println!("{}", add(3, 4));
  }`, // Output: 7

  csharp: `public class Program {
      public static int Add(int a, int b) {
          return a + b;
      }
      public static void Main (string[] args) {
          Console.WriteLine(Add(3, 4));
      }
  }`, // Output: 7

  cpp: `int add(int a, int b) {
    return a + b;
  }
  int main() {
    std::cout << add(3, 4);
    return 0;
  }`, // Output: 7

  go: `func add(a, b int) int {
    return a + b
  }
  func main() {
    fmt.Println(add(3, 4))
  }`, // Output: 7

  java: `public class Main {
      public static int add(int a, int b) {
          return a + b;
      }
      public static void main(String[] args) {
          System.out.println(add(3, 4));
      }
  }`, // Output: 7

  c: `int add(int a, int b) {
    return a + b;
  }
  int main() {
    printf("%d", add(3, 4));
    return 0;
  }`, // Output: 7
};
