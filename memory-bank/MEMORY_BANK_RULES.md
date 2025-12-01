# Memory Bank Rules and Usage

## What is the Memory Bank?

The memory bank is a directory that contains important project documentation and context that should persist across different conversation sessions with Claude Code. It helps maintain continuity and ensures that important project information is always accessible.

## Directory Structure

```
memory-bank/
├── PROJECT_BRIEF.md      # Main project overview and technical details
└── MEMORY_BANK_RULES.md  # This file - explains how to use the memory bank
```

## Automatic Rules

### 1. Thread Initialization
**Trigger**: Start of every new conversation
**Action**: Claude Code will automatically read `PROJECT_BRIEF.md` to understand the project context

This ensures that every new conversation starts with full knowledge of:
- Project purpose and goals
- Technical stack
- Architecture and structure
- Design system
- Current status

### 2. Automatic Updates
**Trigger**: Significant project changes
**Action**: Claude Code will update `PROJECT_BRIEF.md` when making changes to:

- **Dependencies** (package.json modifications)
- **Components** (new major features or sections)
- **Design System** (colors, typography, layouts)
- **Configuration** (build tools, TypeScript, Vite)
- **Project Structure** (file reorganization)
- **Internationalization** (new languages or i18n features)

## How to Use the Memory Bank

### For Developers

1. **Starting a new session**: Simply reference the memory bank in your first message if needed, or let Claude Code read it automatically

2. **After major changes**: Claude Code should automatically update PROJECT_BRIEF.md, but you can also explicitly ask:
   - "Update the memory bank with the changes we just made"
   - "Add this new feature to the PROJECT_BRIEF"

3. **Checking project status**: Ask Claude Code to read from the memory bank:
   - "What's in the PROJECT_BRIEF?"
   - "What's the current project structure?"

### For Claude Code

1. **On thread start**: Read `memory-bank/PROJECT_BRIEF.md` to get project context

2. **During development**: Keep PROJECT_BRIEF.md in mind and update it when:
   - New major features are added
   - Technology stack changes
   - Design system is modified
   - Project structure changes
   - Any information in PROJECT_BRIEF becomes outdated

3. **Update format**: When updating, preserve the document structure and only modify relevant sections

## Benefits

- **Continuity**: Each new conversation has full project context
- **Consistency**: All conversations work from the same source of truth
- **Efficiency**: No need to re-explain the project in each session
- **Documentation**: Serves as living project documentation
- **Onboarding**: Helps new developers understand the project quickly

## Best Practices

1. **Keep it concise**: Focus on essential information, avoid unnecessary details
2. **Keep it current**: Update immediately after significant changes
3. **Be specific**: Include concrete details like version numbers, file paths, colors
4. **Use examples**: Show actual code or configuration when helpful
5. **Structure matters**: Maintain clear sections for easy navigation

## Customization

You can extend the memory bank with additional files:

- `ARCHITECTURE.md` - Detailed architecture decisions
- `CONVENTIONS.md` - Coding standards and patterns
- `DECISIONS.md` - Log of important technical decisions
- `API_REFERENCE.md` - API documentation
- `TROUBLESHOOTING.md` - Common issues and solutions

## Rules Location

The rules for memory bank management are defined in:
- [.clinerules](.clinerules) - Claude Code rules file in project root

## Questions?

If you need to modify these rules or add new ones, you can:
1. Edit the `.clinerules` file directly
2. Ask Claude Code to update the rules
3. Create additional documentation files in the memory-bank directory
