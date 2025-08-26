# 🚀 Deployment Guide for ngx-material-drawer

This guide explains how to deploy your Angular library to npm using GitHub Actions.

## 🎯 Quick Start

### 1. **Setup NPM Token**

```bash
# 1. Go to npmjs.com and login
# 2. Go to Profile → Access Tokens
# 3. Create new token with "Automation" type
# 4. Copy the token
```

### 2. **Add GitHub Secret**

1. Go to your GitHub repo
2. Settings → Secrets and variables → Actions
3. Add new secret: `NPM_SECRET`
4. Paste your npm token

### 3. **Push to GitHub**

```bash
git add .
git commit -m "feat: add GitHub Actions for npm publishing"
git push origin main
```

## 📋 Available Workflows

### **CI Workflow** (`.github/workflows/ci.yml`)

- ✅ Runs on every push/PR
- ✅ Tests multiple Node.js versions
- ✅ Runs linting, tests, and builds
- ✅ No publishing (safe for PRs)

### **Manual Publish** (`.github/workflows/publish.yml`)

- 🚀 Trigger: Push version tag or manual dispatch
- 🚀 Publishes to npm
- 🚀 Creates GitHub release

### **Auto Release** (`.github/workflows/release.yml`)

- 🤖 Trigger: Push to main/master
- 🤖 Automatic semantic versioning
- 🤖 Automatic npm publishing
- 🤖 Automatic GitHub releases

## 🎮 Publishing Methods

### **Method 1: Manual Release (Recommended)**

```bash
# 1. Update version in projects/ngx-material-drawer/package.json
# 2. Commit and push
git add .
git commit -m "feat: add new dashboard features"
git push

# 3. Create and push tag
git tag v2.2.0
git push origin v2.2.0

# 4. GitHub Actions will automatically publish to npm
```

### **Method 2: Automated Release**

```bash
# 1. Use conventional commit messages
git commit -m "feat: add new dashboard features"
git commit -m "fix: resolve animation issue"
git commit -m "docs: update README"

# 2. Push to main branch
git push origin main

# 3. GitHub Actions will automatically:
#    - Analyze commits
#    - Bump version
#    - Publish to npm
#    - Create release
```

## 🔍 Monitoring Deployment

### **Check Workflow Status**

1. Go to GitHub repo → Actions tab
2. Monitor workflow runs
3. Check for any failures

### **Verify npm Package**

1. Visit [npmjs.com/package/ngx-material-drawer](https://www.npmjs.com/package/ngx-material-drawer)
2. Check version and content
3. Verify installation works

### **Check GitHub Releases**

1. Go to GitHub repo → Releases
2. View release notes
3. Download assets if needed

## 🛠️ Troubleshooting

### **Common Issues**

#### Build Fails

```bash
# Check locally first
npm run build:lib

# Fix any TypeScript errors
npm run lint
```

#### Publishing Fails

- Verify `NPM_SECRET` secret is set
- Check if package name is available
- Ensure version number is unique

#### Semantic Release Issues

- Use conventional commit messages
- Check `.releaserc.json` configuration
- Verify semantic-release dependencies

### **Manual Override**

If automated publishing fails:

```bash
# Build manually
npm run build:lib

# Publish manually
cd dist/ngx-material-drawer
npm publish --access public
```

## 📚 Commit Message Examples

### **Feature (Minor version bump)**

```
feat: add responsive grid system
feat: implement dark theme support
feat: add new chart types
```

### **Bug Fix (Patch version bump)**

```
fix: resolve drawer animation issue
fix: correct grid layout calculation
fix: update chart data binding
```

### **Breaking Change (Major version bump)**

```
feat!: change API structure for better performance
feat!: remove deprecated methods
feat!: update to Angular 17+ only
```

### **Documentation**

```
docs: update installation guide
docs: add API documentation
docs: improve examples
```

## 🎉 Success Checklist

- [ ] NPM_SECRET secret added to GitHub
- [ ] Workflows are running successfully
- [ ] Library builds without errors
- [ ] Tests pass on all Node.js versions
- [ ] Package publishes to npm
- [ ] GitHub releases are created
- [ ] Installation works in new projects

## 🔗 Useful Links

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Release](https://semantic-release.gitbook.io/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Your npm Package](https://www.npmjs.com/package/ngx-material-drawer)
