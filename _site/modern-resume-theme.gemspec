lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |spec|
  spec.name          = "modern-resume-theme-extended"
  spec.version       = 3.0
  spec.authors       = ["Vinayak Sharma","James Grant"]
  spec.email         = ["vinayak19th@Gmail.com","sprog31@gmail.com"]

  spec.summary       = "A modern simple static resume template and theme. Powered by Jekyll and GitHub pages."
  spec.homepage      = "https://github.com/sproogen/modern-resume-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.required_ruby_version = '~> 3.0'

  # spec.add_runtime_dependency 'github-pages', '~> 208'
  spec.add_runtime_dependency "jekyll-seo-tag"
  spec.add_runtime_dependency "kramdown"
  spec.add_runtime_dependency "webrick"
  # spec.add_runtime_dependency "jekyll-scholar"

  spec.add_development_dependency "html-proofer"
end
