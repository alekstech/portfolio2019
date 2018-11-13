<template>
  <main class="min-h-full flex flex-col items-center py-8 lg:py-12 px-4 lg:px-8 bg-indigo-lightest">
    <div class="flex flex-col max-w-sm">
      <p class="font-semibold">show parent branch</p>
      <p class="font-mono mt-2">git show-branch | grep '*' | grep -v "$(git rev-parse --abbrev-ref HEAD)" | head -n1 | sed 's/.*\[\(.*\)\].*/\1/' | sed 's/[\^~].*//'</p>
      <p class="font-semibold mt-6">rewrite whole branch history</p>
      <p class="font-mono mt-2">git rebase -i --root branchname</p>
      <p class="font-semibold mt-6">rewrite history for last 2 commits</p>
      <p class="font-mono mt-2">git rebase -i HEAD~2</p>
      <p class="font-semibold mt-6">show last commit &amp; tracked remote</p>
      <p class="font-mono mt-2">git branch -vv</p>
      <p class="font-semibold mt-6">reset hard to match remote</p>
      <p class="font-mono mt-2">git reset --hard remoteName/branchName</p>
      <p class="font-semibold mt-6">show files in last commit</p>
      <p class="font-mono mt-2">git show --name-only</p>
      <p class="font-semibold mt-6">show commits that changed file</p>
      <p class="font-mono mt-2">git log -- path/to/file.js</p>
      <p class="font-semibold mt-6">show how a file changed in a commit</p>
      <p class="font-mono mt-2">git show a1b2c3 path/to/file.js</p>
      <p class="font-semibold mt-6">list 100 most recent commits, one per line, with YYYY-MM-DD dates</p>
      <p class="font-mono mt-2 break-all">git log -n 100  --pretty=format:"%h%x09%an%x09%ad%x09%s" --date=short</p>
      <p class="text-sm mt-1">%h = commit hash, %x09 = space, %an = author name, %ad = commit date, %s = commit message</p>
      <p class="font-semibold mt-6">convert to LF on check in (Mac / Linux)</p>
      <p class="font-mono mt-2">git config --global core.autocrlf input</p>
      <p class="font-semibold mt-6">convert to CRLF on check out (Windows)</p>
      <p class="font-mono mt-2">git config --global core.autocrlf true</p>
    </div>
  </main>
</template>
