import { SiJavascript, SiTypescript, SiPhp, SiPython, SiRuby, SiRust, SiCsharp, SiCplusplus, SiGo, SiC } from 'react-icons/si';
import { DiJava } from 'react-icons/di';

export const supportedLanguages = [
  {
    language: "javascript",
    version: "18.15.0",
    aliases: ["nodejs", "js", "node-javascript", "javascript"],
    runtime: "node",
    icon: SiJavascript,
    extension: "js",
    color: "#f7df1e", 
  },
  {
    language: "typescript",
    version: "5.0.3",
    aliases: ["ts", "typescript", "ts", "tsx"],
    icon: SiTypescript,
    extension: "ts",
    color: "#007acc", 
  },
  {
    language: "php",
    version: "8.2.3",
    aliases: ["php"],
    icon: SiPhp,
    extension: "php",
    color: "#8993be", 
  },
  {
    language: "python",
    version: "3.10.0",
    aliases: ["py", "python3"],
    icon: SiPython,
    extension: "py",
    color: "#3776ab", 
  },
  {
    language: "ruby",
    version: "3.0.1",
    aliases: ["rb", "ruby"],
    icon: SiRuby,
    extension: "rb",
    color: "#cc342d", 
  },
  {
    language: "rust",
    version: "1.68.2",
    aliases: ["rs", "rust"],
    icon: SiRust,
    extension: "rs",
    color: "#dea584", 
  },
  {
    language: "c#",
    version: "6.12.0",
    aliases: ["c#", "cs"],
    runtime: "mono",
    icon: SiCsharp,
    extension: "cs",
    color: "#178600", 
  },
  {
    language: "c++",
    version: "10.2.0",
    aliases: ["c++", "g++", "cpp"],
    runtime: "gcc",
    icon: SiCplusplus,
    extension: "cpp",
    color: "#00599c", 
  },
  {
    language: "go",
    version: "1.16.2",
    aliases: ["golang", "go"],
    icon: SiGo,
    extension: "go",
    color: "#00add8", 
  },
  {
    language: "java",
    version: "15.0.2",
    aliases: ["java"],
    icon: DiJava,
    extension: "java",
    color: "#007396", 
  },
  {
    language: "c",
    version: "10.2.0",
    aliases: ["gcc", "c"],
    runtime: "gcc",
    icon: SiC,
    extension: "c",
    color: "#00599c", 
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
