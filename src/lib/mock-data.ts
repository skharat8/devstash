// Mock data — single source of truth for the dashboard UI until the database is wired up.
// Shapes loosely follow the Prisma schema in context/project-overview.md.

export type ContentType = "TEXT" | "URL" | "FILE";

export interface MockUser {
  id: string;
  name: string;
  email: string;
  image: string | null;
  isPro: boolean;
}

export interface ItemType {
  id: string;
  name: string;
  icon: string; // lucide icon name
  color: string; // hex
  isSystem: boolean;
}

export interface Item {
  id: string;
  title: string;
  description: string | null;
  contentType: ContentType;
  content: string | null;
  url: string | null;
  fileUrl: string | null;
  fileName: string | null;
  fileSize: number | null;
  language: string | null;
  isFavorite: boolean;
  isPinned: boolean;
  itemTypeId: string;
  tags: string[];
  collectionIds: string[];
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
}

export interface Collection {
  id: string;
  name: string;
  description: string | null;
  isFavorite: boolean;
  itemCount: number;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
}

export const currentUser: MockUser = {
  id: "user_1",
  name: "John Doe",
  email: "demo@devstash.io",
  image: null,
  isPro: true,
};

export const itemTypes: ItemType[] = [
  {
    id: "type_snippet",
    name: "Snippet",
    icon: "Code",
    color: "#3b82f6",
    isSystem: true,
  },
  {
    id: "type_prompt",
    name: "Prompt",
    icon: "Sparkles",
    color: "#8b5cf6",
    isSystem: true,
  },
  {
    id: "type_note",
    name: "Note",
    icon: "StickyNote",
    color: "#fde047",
    isSystem: true,
  },
  {
    id: "type_command",
    name: "Command",
    icon: "Terminal",
    color: "#f97316",
    isSystem: true,
  },
  {
    id: "type_link",
    name: "Link",
    icon: "Link",
    color: "#10b981",
    isSystem: true,
  },
  {
    id: "type_file",
    name: "File",
    icon: "File",
    color: "#6b7280",
    isSystem: true,
  },
  {
    id: "type_image",
    name: "Image",
    icon: "Image",
    color: "#ec4899",
    isSystem: true,
  },
];

export const collections: Collection[] = [
  {
    id: "col_react",
    name: "React Patterns",
    description: "Common React patterns and hooks",
    isFavorite: true,
    itemCount: 12,
    createdAt: "2026-01-02T09:00:00.000Z",
    updatedAt: "2026-06-10T09:00:00.000Z",
  },
  {
    id: "col_python",
    name: "Python Snippets",
    description: "Useful Python code snippets",
    isFavorite: false,
    itemCount: 8,
    createdAt: "2026-01-05T09:00:00.000Z",
    updatedAt: "2026-06-08T09:00:00.000Z",
  },
  {
    id: "col_context",
    name: "Context Files",
    description: "AI context files for projects",
    isFavorite: true,
    itemCount: 5,
    createdAt: "2026-02-01T09:00:00.000Z",
    updatedAt: "2026-06-11T09:00:00.000Z",
  },
  {
    id: "col_interview",
    name: "Interview Prep",
    description: "Technical interview preparation",
    isFavorite: false,
    itemCount: 24,
    createdAt: "2026-02-14T09:00:00.000Z",
    updatedAt: "2026-06-09T09:00:00.000Z",
  },
  {
    id: "col_git",
    name: "Git Commands",
    description: "Frequently used git commands",
    isFavorite: true,
    itemCount: 15,
    createdAt: "2026-03-01T09:00:00.000Z",
    updatedAt: "2026-06-12T09:00:00.000Z",
  },
  {
    id: "col_ai",
    name: "AI Prompts",
    description: "Curated AI prompts for coding",
    isFavorite: false,
    itemCount: 18,
    createdAt: "2026-03-20T09:00:00.000Z",
    updatedAt: "2026-06-07T09:00:00.000Z",
  },
];

export const items: Item[] = [
  {
    id: "item_useauth",
    title: "useAuth Hook",
    description: "Custom authentication hook for React applications",
    contentType: "TEXT",
    content:
      "export function useAuth() {\n  const { data: session } = useSession();\n  return { user: session?.user, isAuthenticated: !!session };\n}",
    url: null,
    fileUrl: null,
    fileName: null,
    fileSize: null,
    language: "typescript",
    isFavorite: true,
    isPinned: true,
    itemTypeId: "type_snippet",
    tags: ["react", "auth", "hooks"],
    collectionIds: ["col_react", "col_interview"],
    createdAt: "2026-01-15T10:00:00.000Z",
    updatedAt: "2026-01-15T10:00:00.000Z",
  },
  {
    id: "item_apierror",
    title: "API Error Handling Pattern",
    description: "Fetch wrapper with exponential backoff retry logic",
    contentType: "TEXT",
    content:
      "async function fetchWithRetry(url, options, retries = 3) {\n  for (let i = 0; i < retries; i++) {\n    try {\n      return await fetch(url, options);\n    } catch (e) {\n      await new Promise((r) => setTimeout(r, 2 ** i * 1000));\n    }\n  }\n}",
    url: null,
    fileUrl: null,
    fileName: null,
    fileSize: null,
    language: "javascript",
    isFavorite: false,
    isPinned: true,
    itemTypeId: "type_snippet",
    tags: ["api", "error-handling", "fetch"],
    collectionIds: ["col_react"],
    createdAt: "2026-01-12T14:30:00.000Z",
    updatedAt: "2026-01-12T14:30:00.000Z",
  },
  {
    id: "item_debug_prompt",
    title: "Debug This Code",
    description: "Prompt to walk an AI through debugging a failing snippet",
    contentType: "TEXT",
    content:
      "You are an expert debugger. Analyze the following code, identify the bug, explain the root cause, and provide a corrected version.",
    url: null,
    fileUrl: null,
    fileName: null,
    fileSize: null,
    language: null,
    isFavorite: true,
    isPinned: false,
    itemTypeId: "type_prompt",
    tags: ["debugging", "ai"],
    collectionIds: ["col_ai"],
    createdAt: "2026-04-02T11:00:00.000Z",
    updatedAt: "2026-05-20T11:00:00.000Z",
  },
  {
    id: "item_git_undo",
    title: "Undo Last Commit",
    description: "Soft reset to keep changes staged",
    contentType: "TEXT",
    content: "git reset --soft HEAD~1",
    url: null,
    fileUrl: null,
    fileName: null,
    fileSize: null,
    language: "bash",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_command",
    tags: ["git"],
    collectionIds: ["col_git"],
    createdAt: "2026-03-05T08:15:00.000Z",
    updatedAt: "2026-03-05T08:15:00.000Z",
  },
  {
    id: "item_git_squash",
    title: "Squash Last 3 Commits",
    description: "Interactive rebase to combine recent commits",
    contentType: "TEXT",
    content: "git rebase -i HEAD~3",
    url: null,
    fileUrl: null,
    fileName: null,
    fileSize: null,
    language: "bash",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_command",
    tags: ["git", "rebase"],
    collectionIds: ["col_git"],
    createdAt: "2026-03-08T08:15:00.000Z",
    updatedAt: "2026-03-08T08:15:00.000Z",
  },
  {
    id: "item_list_comp",
    title: "Flatten Nested List",
    description: "One-line list comprehension to flatten a 2D list",
    contentType: "TEXT",
    content: "flat = [x for row in matrix for x in row]",
    url: null,
    fileUrl: null,
    fileName: null,
    fileSize: null,
    language: "python",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_snippet",
    tags: ["python", "lists"],
    collectionIds: ["col_python"],
    createdAt: "2026-02-18T16:45:00.000Z",
    updatedAt: "2026-02-18T16:45:00.000Z",
  },
  {
    id: "item_big_o",
    title: "Big-O Cheat Sheet",
    description: "Time complexity reference for common algorithms",
    contentType: "TEXT",
    content:
      "# Big-O Cheat Sheet\n\n- Array access: O(1)\n- Binary search: O(log n)\n- Linear scan: O(n)\n- Quicksort (avg): O(n log n)",
    url: null,
    fileUrl: null,
    fileName: null,
    fileSize: null,
    language: null,
    isFavorite: true,
    isPinned: false,
    itemTypeId: "type_note",
    tags: ["algorithms", "interview"],
    collectionIds: ["col_interview"],
    createdAt: "2026-02-20T13:00:00.000Z",
    updatedAt: "2026-04-01T13:00:00.000Z",
  },
  {
    id: "item_react_docs",
    title: "React Docs — You Might Not Need an Effect",
    description: "Guide on avoiding unnecessary effects",
    contentType: "URL",
    content: null,
    url: "https://react.dev/learn/you-might-not-need-an-effect",
    fileUrl: null,
    fileName: null,
    fileSize: null,
    language: null,
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_link",
    tags: ["react", "docs"],
    collectionIds: ["col_react"],
    createdAt: "2026-01-20T10:00:00.000Z",
    updatedAt: "2026-01-20T10:00:00.000Z",
  },
  {
    id: "item_claude_md",
    title: "CLAUDE.md Context File",
    description: "AI context file for the DevStash project",
    contentType: "FILE",
    content: null,
    url: null,
    fileUrl: "https://r2.example.com/files/claude-md",
    fileName: "CLAUDE.md",
    fileSize: 8432,
    language: null,
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_file",
    tags: ["context", "ai"],
    collectionIds: ["col_context"],
    createdAt: "2026-02-05T09:30:00.000Z",
    updatedAt: "2026-06-01T09:30:00.000Z",
  },
  {
    id: "item_arch_diagram",
    title: "Architecture Diagram",
    description: "System architecture overview for onboarding",
    contentType: "FILE",
    content: null,
    url: null,
    fileUrl: "https://r2.example.com/files/architecture.png",
    fileName: "architecture.png",
    fileSize: 245678,
    language: null,
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_image",
    tags: ["architecture", "diagram"],
    collectionIds: ["col_context"],
    createdAt: "2026-02-06T09:30:00.000Z",
    updatedAt: "2026-02-06T09:30:00.000Z",
  },
];
