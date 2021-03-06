# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "jekyll-theme-primer"
  s.version = "0.1.7"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["GitHub, Inc."]
  s.date = "2017-01-14"
  s.email = ["open-source@github.com"]
  s.homepage = "https://github.com/pages-themes/jekyll-theme-primer"
  s.licenses = ["None"]
  s.require_paths = ["lib"]
  s.rubygems_version = "2.0.14"
  s.summary = "Primer is a Jekyll theme for GitHub Pages based on GitHub's Primer styles"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<jekyll>, ["~> 3.3"])
      s.add_development_dependency(%q<rubocop>, ["~> 0.40"])
    else
      s.add_dependency(%q<jekyll>, ["~> 3.3"])
      s.add_dependency(%q<rubocop>, ["~> 0.40"])
    end
  else
    s.add_dependency(%q<jekyll>, ["~> 3.3"])
    s.add_dependency(%q<rubocop>, ["~> 0.40"])
  end
end
