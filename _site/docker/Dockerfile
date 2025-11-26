FROM bretfisher/jekyll:latest

COPY Gemfile Gemfile.lock modern-resume-theme.gemspec ./
RUN bundle install
ENTRYPOINT ["/bin/sh"]