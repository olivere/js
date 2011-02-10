# Rakefile for JS (aka JavaScript). -*-ruby-*

def run(cmd)
  puts(cmd)
  system(cmd)
end

desc "Run all tests (in a browser)"
task :default => [:test]

task :test do
  run("open #{File.dirname(__FILE__)}/test/index.html")
end
