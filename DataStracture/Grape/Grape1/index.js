import { Grape } from "./Grape.js";

const grape = new Grape(9);

grape.add(0, 1);
grape.add(1, 2);
grape.add(1, 3);
grape.add(2, 4);
grape.add(2, 3);
grape.add(3, 4);
grape.add(3, 5);
grape.add(5, 6);
grape.add(5, 7);
grape.add(6, 8);

grape.print();
grape.dfs();
grape.dfsR();
