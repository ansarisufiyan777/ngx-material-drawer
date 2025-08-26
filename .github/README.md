# GitHub Actions for npm Publishing

This repository uses GitHub Actions to automatically publish the `ngx-material-drawer` library to npm.

## 🚀 Workflows

### 1. **Publish to NPM** (`.github/workflows/publish.yml`)

- **Trigger**: Pushing version tags (e.g., `v2.1.0`) or manual dispatch
- **Purpose**: Manual control over when to publish
- **Features**:
  - Runs tests and linting
  - Builds the library
  - Publishes to npm
  - Creates GitHub release

### 2. **Release and Publish** (`.github/workflows/release.yml`)

- **Trigger**: Pushes to main/master branch
- **Purpose**: Automated semantic versioning and publishing
- **Features**:
  - Automated version bumping
  - Changelog generation
  - Automatic npm publishing
  - GitHub release creation

## 🔑 Required Secrets

### NPM Token

1. Go to [npmjs.com](https://www.npmjs.com) and login
2. Go to your profile → Access Tokens
3. Create a new token with "Automation" type
4. Copy the token
5. In your GitHub repo: Settings → Secrets and variables → Actions
6. Add new secret: `NPM_SECRET` with the npm token value

### GitHub Token

- `GITHUB_TOKEN` is automatically provided by GitHub Actions
- No manual setup required

## 📝 Commit Message Convention

For semantic versioning to work, use conventional commit messages:

```
feat: add new feature
fix: fix a bug
docs: update documentation
style: formatting changes
refactor: code refactoring
test: add tests
chore: maintenance tasks
```

### Examples:

- `feat: add responsive grid system` → Minor version bump
- `fix: resolve drawer animation issue` → Patch version bump
- `feat!: breaking change in API` → Major version bump

## 🎯 Publishing Process

### Option 1: Manual Release (Recommended for major releases)

```bash
# 1. Update version in projects/ngx-material-drawer/package.json
# 2. Commit changes
git add .
git commit -m "feat: add new dashboard features"
git push

# 3. Create and push a tag
git tag v2.2.0
git push origin v2.2.0
```

### Option 2: Automated Release

```bash
# 1. Push to main branch with conventional commits
git add .
git commit -m "feat: add new dashboard features"
git push origin main

# 2. GitHub Actions will automatically:
#    - Analyze commits
#    - Determine version bump
#    - Update package.json
#    - Publish to npm
#    - Create GitHub release
```

## 🔍 Monitoring

### Check Workflow Status

1. Go to your GitHub repo
2. Click "Actions" tab
3. Monitor workflow runs

### Check npm Package

1. Visit [npmjs.com/package/ngx-material-drawer](https://www.npmjs.com/package/ngx-material-drawer)
2. Verify version and content

### Check GitHub Releases

1. Go to your GitHub repo
2. Click "Releases" on the right sidebar
3. View release notes and assets

## 🛠️ Troubleshooting

### Common Issues

#### 1. Build Failures

- Check Node.js version compatibility
- Verify all dependencies are installed
- Check for TypeScript compilation errors

#### 2. Publishing Failures

- Verify NPM_TOKEN secret is set correctly
- Check if package name is available on npm
- Ensure version number is unique

#### 3. Semantic Release Issues

- Verify commit message format
- Check .releaserc.json configuration
- Ensure semantic-release dependencies are installed

### Manual Override

If automated publishing fails:

```bash
# Build manually
npm run build:lib

# Publish manually
cd dist/ngx-material-drawer
npm publish --access public
```

## 📚 Resources

- [Semantic Release Documentation](https://semantic-release.gitbook.io/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Conventional Commits](https://www.conventionalcommits.org/)
