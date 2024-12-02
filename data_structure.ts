type Node = {
  id: string;
  type: 'node' | 'subgraph' | 'edge';
  label: string;
  children?: Node[];
  metadata?: {
    style: StyleProps;
    position?: Position;
    importance: number;  // LLM-assigned weight
  }
}

type Edge = {
  source: string;
  target: string;
  type: 'normal' | 'emphasis' | 'subflow';
  label?: string;
}

type Graph = {
  nodes: Node[];
  edges: Edge[];
  subgraphs: Node[];
}
