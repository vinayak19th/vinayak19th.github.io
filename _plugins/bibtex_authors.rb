# Formats BibTeX author names as "First Last" for display and citation dumps.
# jekyll-scholar always serializes entry.bibtex authors as "Last, First"; these
# filters rebuild the author line from the parsed name parts instead.
module BibtexAuthors
  module Filters
    def authors_first_last(author_array, separator = ', ')
      format_authors(author_array, separator)
    end

    def bibtex_first_last_authors(bibtex, author_array)
      return bibtex if bibtex.to_s.empty? || author_array.nil?

      authors = format_authors(author_array, ' and ')
      bibtex.to_s.sub(/author\s*=\s*\{(?:[^{}]|\{[^{}]*\})*\}/m, "author = {#{authors}}")
    end

    private

    def format_authors(author_array, separator)
      Array(author_array).map { |author| format_author(author) }.reject(&:empty?).join(separator)
    end

    def format_author(author)
      parts = author_parts(author)
      first = parts['first']
      prefix = parts['prefix']
      last = parts['last'].gsub(/\A\{|\}\z/, '')
      suffix = parts['suffix']

      name_parts = []
      name_parts << first unless first.empty?
      name_parts << prefix unless prefix.empty?
      name_parts << last unless last.empty?
      name = name_parts.join(' ')
      suffix.empty? ? name : "#{name} #{suffix}"
    end

    def author_parts(author)
      raw =
        if author.respond_to?(:to_liquid)
          author.to_liquid
        elsif author.respond_to?(:to_h)
          author.to_h
        else
          author
        end

      %w[first prefix last suffix].each_with_object({}) do |key, memo|
        value = raw[key] || raw[key.to_sym]
        memo[key] = value.to_s.strip
      end
    end
  end
end

Liquid::Template.register_filter(BibtexAuthors::Filters)
