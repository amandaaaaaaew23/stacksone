;; Config updated 2026-06-10T10:52:25Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u21)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
